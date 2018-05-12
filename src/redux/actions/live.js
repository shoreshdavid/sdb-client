import { getData } from './index';
import * as types from './types';

const liveUrl = 'https://graph.facebook.com/shoreshdavidbrandon?fields=live_videos{creation_time,description,embed_html,id}';


export const fetchLiveVideo = () => {
  const url = `${liveUrl}`;
  
  return dispatch => getData(types.FETCH_LIVE_VIDEO_SUCCESS, types.FETCH_LIVE_VIDEO_FAILURE, url, dispatch);
}