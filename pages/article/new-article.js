import { ArticleForm } from '../../components/ArticleForm';
import { Layout } from '../../components/Layout';
import { addNewArticle } from '../../firebase/api/articles';
import PrivateRouter from '../../HOC/PrivateRouter';

const NewArticle = () => (
  <PrivateRouter>
    <Layout>
      <h1 className="headline--1 pl-0">Nový článek</h1>
      <ArticleForm articleCallback={addNewArticle} />
    </Layout>
  </PrivateRouter>
);

export default NewArticle;
