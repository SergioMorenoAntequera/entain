import { useParams, useLocation } from "react-router";
import { useGetMovieQuery, IMAGES_URL } from "../moviesApiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  gap: 36px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 40px 32px;
  margin-top: 40px;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 24px 8px;
    gap: 20px;
  }
`;

const Poster = styled.img`
  width: 320px;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  background: #eee;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 18px 0;
  font-size: 2.2rem;
  color: #222;
  font-weight: 700;
`;

const Overview = styled.p`
  color: #444;
  font-size: 1.15rem;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const Meta = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  font-size: 1.05rem;
  color: #666;
  background: #f7f7f7;
  border-radius: 6px;
  padding: 8px 16px;
  margin-bottom: 6px;
`;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const movieFromState = location.state?.movie;

  const { data, error, isLoading } = useGetMovieQuery(movieId || skipToken, { skip: !!movieFromState });

  if (isLoading) return <div style={{ marginTop: 40, fontSize: "1.2rem" }}>Loading...</div>;
  if (error || (!data && !movieFromState)) return <div style={{ marginTop: 40, color: "#b00" }}>Error loading movie details</div>;
  const movie = movieFromState || data?.data;

  return (
    <DetailsWrapper>
      {movie.poster_path ? (
        <Poster src={`${IMAGES_URL}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <Poster as="div" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa", fontSize: "1.2rem", background: "#eee", minHeight: 480 }}>
          No Image
        </Poster>
      )}
      <Info>
        <Title>{movie.title}</Title>
        <Meta>
          <MetaItem>Release Date: {movie.release_date}</MetaItem>
          <MetaItem>Rating: {movie.vote_average}</MetaItem>
          {movie.runtime && <MetaItem>Runtime: {movie.runtime} min</MetaItem>}
        </Meta>
        <Overview>{movie.overview}</Overview>
      </Info>
    </DetailsWrapper>
  );
}

export default MovieDetailsPage;