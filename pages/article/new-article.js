import { ArticleForm } from '../../components/ArticleForm';
import { Layout } from '../../components/Layout';
import { addNewArticle } from '../../firebase/api/articles';

const NewArticle = () => (
  <Layout>
    <h1 className="headline--1 pl-0">Nový článek</h1>
    <ArticleForm articleCallback={addNewArticle} />
  </Layout>
);

export default NewArticle;
