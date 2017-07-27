import axios from 'axios'

export const ArticleResource = axios.create({baseURL: 'home/article'})
export const UserResource = axios.create({baseURL: 'home/user'})
export const CommentResource = axios.create({baseURL: 'home/comment'})
