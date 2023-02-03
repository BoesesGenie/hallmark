import React, { FC } from 'react';
import Layout from '../../components/Layout';
import MainPost from './components/MainPost';
import PostsList from './components/PostsList';

const BlogPage: FC = () => (
  <Layout>
    <MainPost />
    <PostsList />
  </Layout>
);

export default BlogPage;
