import axiosclient from "../axios/axiosclient";
import tmdbEndpoints from "./tmdb.endpoints.js";

const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    await axiosclient.get(
      tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
  mediaDetail: async ({ mediaType, page }) =>
    await axiosclient.get(tmdbEndpoints.mediaDetail({ mediaType, page })),
  mediaGenres: async ({ mediaType }) =>
    await axiosclient.get(tmdbEndpoints.mediaDetail({ mediaType })),
  mediaCredits: async ({ mediaType, mediaId }) =>
    await axiosclient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
  mediaVideos: async ({ mediaType, mediaId }) =>
    await axiosclient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }) =>
    await axiosclient.get(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }) =>
    await axiosclient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
  mediaSearch: async ({ mediaType, query, page }) =>
    await axiosclient.get(
      tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),
  personDetail: async ({ personId }) =>
    await axiosclient.get(tmdbEndpoints.personDetail(personId)),
  personMedias: async ({ personId }) =>
    await axiosclient.get(tmdbEndpoints.personMedias(personId)),
};
export default tmdbApi;
