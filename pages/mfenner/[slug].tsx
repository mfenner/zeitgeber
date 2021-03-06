import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import SimilarPosts from '../../components/SimilarPosts'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCreativeCommons,
  faCreativeCommonsBy
} from '@fortawesome/free-brands-svg-icons'

import { GetStaticPaths } from 'next'
import {
  getGhostPosts,
  getSinglePostBySlug,
  getSimilarPosts
} from '../../lib/posts'
import Byline from '../../components/Byline'
import DiscourseForum from '../../lib/discourse-forum.js'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getGhostPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const post = await getSinglePostBySlug(context.params.slug)
  const similarPosts = await getSimilarPosts(
    post.hits[0].document.title + ' ' + post.hits[0].document.tags.join(' '),
    post.hits[0].document.id
  )

  if (!post) {
    return {
      props: { notFound: true }
    }
  }

  return {
    props: { post, similarPosts }
  }
}

const Post = (props) => {
  if (!props.post) return <div>Not found</div>

  const hit = props.post.hits[0] && props.post.hits[0].document

  return (
    <>
      <Head>
        <title>{hit.title}</title>

        <meta name="citation_title" content={hit.title} />
        <meta name="citation_author" content={hit.author.name} />
        <meta
          name="citation_publication_date"
          content={new Date(hit.published * 1000).toLocaleDateString('en-US')}
        />
        <meta name="citation_journal_title" content="FronMatter" />
        <meta name="citation_language" content="en" />
        {hit.tags && (
          <meta name="citation_keywords" content={hit.tags.join(', ')} />
        )}
        <meta
          name="citation_pdf_url"
          content={'https://blog.front-matter.io/pdf/' + hit.slug + '.pdf'}
        />

        <meta name="og:title" content={hit.title} />
        <meta name="og:description" content={hit.description} />
        <script type="application/ld+json">
          {JSON.stringify(hit.schemaOrg)}
        </script>
      </Head>
      <Header />
      <div className="container mx-4 md:mx-auto px-6 py-8 flex flex-wrap justify-center">
        <div className="w-full md:w-8/12 ">
          {hit.tags && (
            <p className="text-sm font-medium uppercase font-sans mb-0 text-green-600">
              {hit.tags.map((tag, index) => (
                <>
                  <Link key={tag} href={`/categories/${tag}`}>
                    <span className="border-b-0 hover:border-b hover:border-green-600">
                      {tag.split('-').join(' ')}
                    </span>
                  </Link>
                  {index + 1 < hit.tags.length ? ' · ' : ''}
                </>
              ))}
            </p>
          )}
          <h1 className="mt-0 mb-2 text-green-600">{hit.title}</h1>
          <Byline
            author={{
              name: hit.author.name,
              imageUrl: hit.author.imageUrl
            }}
            published={new Date(hit.published * 1000)}
            readingTime={hit.readingTime}
          />
          <div className="text-lg">{ReactHtmlParser(hit.content)}</div>
          <div
            className="text-base leading-snug text-gray-600 py-1 font-sans"
            data-cy="copyright"
          >
            <span className="text-lg text-gray-900 mr-1">
              <FontAwesomeIcon icon={faCreativeCommons} className="mr-0.5" />
              <FontAwesomeIcon icon={faCreativeCommonsBy} />
            </span>
            Copyright © {new Date(hit.published * 1000).getFullYear()}{' '}
            {hit.author.name}. Distributed under the terms of the{' '}
            <a
              className="border-b-0"
              href="https://creativecommons.org/licenses/by/4.0/legalcode"
            >
              Creative Commons Attribution 4.0 License.
            </a>
          </div>
          <DiscourseForum post={hit} />
        </div>
      </div>
      <SimilarPosts posts={props.similarPosts} />
      <Footer />
    </>
  )
}

export default Post
