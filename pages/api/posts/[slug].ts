import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import omit from 'lodash/omit'
import { getSinglePostBySlug } from '../../../lib/posts'
import { initMiddleware } from '../../../lib/helpers'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res)

  const post = await getSinglePostBySlug(req.query['slug'] as string)
  console.log(post)
  if (post && post.name === 'ObjectNotFoundError') {
    res.status(404).json({
      name: post.name,
      message: post.message,
      status: 404
    })
  } else {
    // don't show _highlightResult object in API
    const response = omit(post['object'], '_highlightResult')

    res.status(200).json(response)
  }
}
