import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { myPlayer } from "../redux/action";

const SearchResults = () => {
  let results = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  return results.map((song) => (
    <Col
      className="col text-center mt-3"
      key={song.id}
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(myPlayer(song))}
    >
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: {song.title.length < 16 ? song.title : song.title.substring(0, 16) + "..."}
        <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  ));
};

export default SearchResults;
