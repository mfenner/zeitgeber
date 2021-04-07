import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Byline from './Byline'

export default function Featured(posts) {
  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="container mx-auto flex flex-auto items-center justify-between">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the Archives
              </h2>
              <p className="mt-0 pt-0 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-sans">
                Featured content from the Front Matter Archives.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
              {posts.posts.slice(0, 1).map((post) => (
                <>
                  <div className="flex-shrink-0 bg-white pt-6 px-6">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.document.featureImage}
                      alt=""
                    />
                  </div>
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.document.id}
                  >
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium uppercase font-sans text-green-600">
                          {post.document._tags[0]}
                        </p>
                        <a
                          href={'/mfenner/' + post.document.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.document.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {ReactHtmlParser(post.document.description)}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          author={{
                            name: post.document.author.name,
                            imageUrl: post.document.author.imageUrl
                          }}
                          published={new Date(post.document.published * 1000)}
                          readingTime={post.document.readingTime}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.posts.slice(1, 4).map((post) => (
                <div
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  key={post.document.id}
                >
                  <div className="flex-shrink-0 bg-white pt-6 px-6">
                    <img
                      className="h-48 w-full object-contain"
                      src={post.document.featureImage}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium uppercase font-sans text-green-600">
                        {post.document._tags[0]}
                      </p>
                      <a
                        href={'/mfenner/' + post.document.slug}
                        className="block mt-2 border-b-0"
                      >
                        <p className="text-xl font-semibold font-sans text-gray-900">
                          {post.document.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {ReactHtmlParser(post.document.description)}
                        </p>
                      </a>
                    </div>
                    <div className="mt-0 flex items-center">
                      <Byline
                        author={{
                          name: post.document.author.name,
                          imageUrl: post.document.author.imageUrl
                        }}
                        published={new Date(post.document.published * 1000)}
                        readingTime={post.document.readingTime}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {posts.posts.slice(4, 6).map((post) => (
                <div
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  key={post.document.id}
                >
                  <div className="flex-shrink-0 bg-white pt-6 px-6">
                    <img
                      className="h-48 w-full object-contain"
                      src={post.document.featureImage}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium uppercase font-sans text-green-600">
                        {post.document._tags[0]}
                      </p>
                      <a
                        href={'/mfenner/' + post.document.slug}
                        className="block mt-2 border-b-0"
                      >
                        <p className="text-xl font-semibold font-sans text-gray-900">
                          {post.document.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {ReactHtmlParser(post.document.description)}
                        </p>
                      </a>
                    </div>
                    <div className="mt-0 flex items-center">
                      <Byline
                        author={{
                          name: post.document.author.name,
                          imageUrl: post.document.author.imageUrl
                        }}
                        published={new Date(post.document.published * 1000)}
                        readingTime={post.document.readingTime}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
              {posts.posts.slice(6, 7).map((post) => (
                <>
                  <div className="flex-shrink-0 bg-white pt-6 px-6">
                    <img
                      className="h-48 w-full object-cover"
                      src={
                        post.document.featureImage
                          ? post.document.featureImage
                          : 'https://assets.front-matter.io/ghost/news.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.document.id}
                  >
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium uppercase font-sans text-green-600">
                          {post.document._tags[0]}
                        </p>
                        <a
                          href={'/mfenner/' + post.document.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.document.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {ReactHtmlParser(post.document.description)}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          author={{
                            name: post.document.author.name,
                            imageUrl: post.document.author.imageUrl
                          }}
                          published={new Date(post.document.published * 1000)}
                          readingTime={post.document.readingTime}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.posts.slice(7, 10).map((post) => (
                <div
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  key={post.document.id}
                >
                  <div className="flex-shrink-0 bg-white pt-2 px-6">
                    <img
                      className="h-48 w-full object-contain"
                      src={
                        post.document.featureImage
                          ? post.document.featureImage
                          : 'https://assets.front-matter.io/ghost/news.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium uppercase font-sans text-green-600">
                        {post.document._tags[0]}
                      </p>
                      <a
                        href={'/mfenner/' + post.document.slug}
                        className="block mt-2 border-b-0"
                      >
                        <p className="text-xl font-semibold font-sans text-gray-900">
                          {post.document.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {ReactHtmlParser(post.document.description)}
                        </p>
                      </a>
                    </div>
                    <div className="mt-0 flex items-center">
                      <Byline
                        author={{
                          name: post.document.author.name,
                          imageUrl: post.document.author.imageUrl
                        }}
                        published={new Date(post.document.published * 1000)}
                        readingTime={post.document.readingTime}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {posts.posts.slice(10, 12).map((post) => (
                <div
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  key={post.document.id}
                >
                  <div className="flex-shrink-0 bg-white pt-6 px-6">
                    <img
                      className="h-48 w-full object-contain"
                      src={
                        post.document.featureImage
                          ? post.document.featureImage
                          : 'https://assets.front-matter.io/ghost/news.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium uppercase font-sans text-green-600">
                        {post.document._tags[0]}
                      </p>
                      <a
                        href={'/mfenner/' + post.document.slug}
                        className="block mt-2 border-b-0"
                      >
                        <p className="text-xl font-semibold font-sans text-gray-900">
                          {post.document.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {ReactHtmlParser(post.document.description)}
                        </p>
                      </a>
                    </div>
                    <div className="mt-0 flex items-center">
                      <Byline
                        author={{
                          name: post.document.author.name,
                          imageUrl: post.document.author.imageUrl
                        }}
                        published={new Date(post.document.published * 1000)}
                        readingTime={post.document.readingTime}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
