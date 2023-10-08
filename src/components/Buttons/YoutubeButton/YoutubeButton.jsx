import { Link } from 'react-router-dom';
import './YoutubeButton.css';

export default function YoutubeButton({ strYoutube }) {
  return (
    <button className='button'>
      <Link to={`${strYoutube}`} className='yt-link' target='_blank'>
        <span className='icon'>
          <svg
            fill='none'
            height='33'
            viewBox='0 0 120 120'
            width='33'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z'
              fill='#cd201f'
            ></path>
            <path
              d='m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z'
              fill='#fff'
            ></path>
            <path d='m74 59.5-21 10.8253v-21.6506z' fill='#cd201f'></path>
          </svg>
        </span>
        <span className='text1'>Go To YouTube</span>
      </Link>
    </button>
  );
}
