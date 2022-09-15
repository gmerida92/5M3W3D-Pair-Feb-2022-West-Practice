import './SingleArticle.css';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const SingleArticle = ({ articles }) => {
  const params = useParams();
  const { id } = params;

  const allArticles = useSelector(state => state.articleState.entries)
  const selectedArticle = allArticles.find(article => id === article.id)




  return (
    <div className='singleArticle'>
      <h1>{selectedArticle?.title}</h1>
      <img
        src={selectedArticle?.imageUrl}
        alt='home'
      />
      <p>
        {selectedArticle?.body}
      </p>
    </div>
  );
};

export default SingleArticle;