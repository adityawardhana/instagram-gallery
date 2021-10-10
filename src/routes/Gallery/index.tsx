import qs from "qs";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Box from "../../components/Box";
import EmptyState from "../../components/EmptyState";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../components/Image";
import SearchBox from "../../components/SearchBox";
import Spinner from "../../components/Spinner";
import Text from "../../components/Text";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getGalleries, searchGalleries } from "../../services/gellery";
import { renderImage } from "../../utils/image";
import ImageWrapper from "./components/ImageWrapper";
import Search from "./components/Search";

const DEFAULT_LIMIT: number = 15;
type ParamsProps = {
  page: number;
  limit: number;
};

const Gallery: FC<{}> = () => {
  const [params, setParams] = useState<ParamsProps>({
    page: 1,
    limit: DEFAULT_LIMIT,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [collections, setCollections] = useState<Array<any>>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { fetch, loading, error } = useFetch(
    () => getGalleries(qs.stringify(params)),
    {
      onSuccess: (result) => {
        // set next data
        setParams({ ...params, page: params.page + 1 });
        setHasMore(result.data?.length === params.limit);
        // merge array data
        setCollections([...collections, ...result.data]);
      },
    }
  );
  const {
    fetch: search,
    data,
    loading: searchLoading,
  } = useFetch(() => searchGalleries(searchQuery), {
    immediate: false,
  });

  useDebounce(
    () => {
      showSearch && search();
    },
    searchQuery,
    1000
  );

  const [gridType] = useLocalStorage('GRID_TYPE', 'instagrid')

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value ?? "");
  };

  /**
   * Effect when height of first load collection data less than screen height, and then fetch new page
   */
  const containerRef = useRef<any>();
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (collections?.length && params.page > 1) {
      if (containerRef.current.offsetHeight <= window.innerHeight - 56) {
        // use timeout to make delay effect
        timer = setTimeout(() => {
          fetch();
        }, 2000);
      }
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections]);



  return (
    <Fragment>
      <Header>
        <SearchBox
          placeholder="Type your search here..."
          value={searchQuery}
          onChange={handleChangeSearch}
          onFocus={() => setShowSearch(true)}
        />
        {showSearch && (
          <Text
            type="B14"
            color="black800"
            ml={8}
            onClick={() => {
              setShowSearch(false);
              setSearchQuery("");
            }}
          >
            Cancel
          </Text>
        )}
      </Header>

      <Search
        show={showSearch}
        data={data?.data || []}
        total={data?.pagination?.total}
        loading={searchLoading}
        query={searchQuery}
      />

      <Box
        p={16}
        mt={56}
        bg="white"
        minHeight="calc(100vh - 56px)"
        ref={containerRef}
      >
        <InfiniteScroll
          dataLength={collections.length}
          next={fetch}
          hasMore={hasMore}
          loader={
            loading && (
              <Box width={50} m="auto">
                <Spinner color="black800" />
              </Box>
            )
          }
        >
          {!collections?.length && error ? (
            <EmptyState
              description="We're currently having issue. please try again. sorry"
              link="/"
              linkText="Reload"
              onClick={() => window.location.reload()}
            />
          ) : (
            collections.map((item, index) => {
              return (
                <Link to={`/${item.id}`} key={index} id={`${index}`}>
                  <ImageWrapper
                    isLeft={
                      (index + 1) % 18 === 1 &&
                      collections.length > 5 &&
                      collections.length - 2 > index
                    }
                    isRight={
                      (index + 1) % 18 === 11 && collections.length - 1 > index
                    }
                    gridType={gridType}
                  >
                    <Image
                      className="square"
                      src={renderImage(item.image_id)}
                      alt={item.title}
                      placeholder={item.thumbnail?.lqip}
                    />
                  </ImageWrapper>
                </Link>
              );
            })
          )}
        </InfiniteScroll>
      </Box>
      <Footer active="HOME" />
    </Fragment>
  );
};

export default Gallery;
