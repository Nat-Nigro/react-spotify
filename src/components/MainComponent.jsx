import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResult";
import Album from "./Album";

const MainComponent = () => {
  let searchValue = useSelector((state) => state.search?.searchValue || "");
  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: searchValue.length > 0 ? "block" : "none" }}>
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              <SearchResults />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <Album artist="coldplay" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {" "}
              <Album artist="katy perry" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {" "}
              <Album artist="eminem" />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainComponent;
