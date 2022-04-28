import { ArticleForm } from '../../components/ArticleForm';
import { Layout } from '../../components/Layout';

const NewArticle = () => (
  <Layout>
    <h1 className="headline--1 pl-0">Nový článek</h1>
    <ArticleForm onAddNewArticle />
  </Layout>
);

export default NewArticle;
