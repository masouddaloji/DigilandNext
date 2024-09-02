import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { VscClose } from "react-icons/vsc";
import styles from "./Search.module.css";
import Link from "next/link";
import Image from "next/image";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  // const debounceQuery = useDebounce(searchValue, 500);
  const [showResult, setShowResult] = useState(false);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 5,
    category: "",
    subCategory: "",
    color: "",
    price: "",
    sort: "",
    brand: "",
    // search: debounceQuery,
    search: "",
  });

  const searchHandler = () => setShowResult(true);

  return (
    <div className={styles.serach__wrapper}>
      <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
        <TfiSearch className={styles.searchBox__iconSearch} onClick={searchHandler} />

        <input
          type="text"
          className={styles.searchBox__input}
          placeholder="کلید واژه مورد نظر..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setShowResult(true);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
        />

        {showResult && (
          <VscClose
            className={styles["search-box__btn--close"]}
            onClick={() => {
              setShowResult(false);
              setSearchValue("");
            }}
          />
        )}

        {/* {showResult && debounceQuery && ( */}
        {showResult && (
          <div className={styles["search-box__result-wrapper"]}>
            {/* {isLoading && <div className={styles["search-box__loader"]}></div>} */}
            {/* {isSuccess && (
              <>
                {result?.data?.length ? (
                  <>
                    {result.data.map((item) => (
                      <div
                        className={styles["search-box__result-box"]}
                        key={item._id}
                        onClick={() => setShowResult(false)}
                      >
                        <div className={styles["search-box__result-banner"]}>
                          <Image
                            src={`https://digiland-app.iran.liara.run${item.image}`}
                            alt="Photo search result"
                            className={styles["search-box__result-img"]}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className={styles["search-box__result-info"]}>
                          <Link
                            className={styles["search-box__result-link"]}
                            href={`/product/${item._id}`}
                          >
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                    <div
                      className={styles["search-box__result-btn"]}
                      onClick={() => setShowResult(false)}
                    >
                      <Link
                        href={`/products/search/${searchParams.search}`}
                        className={styles["search-box__result-seeAll"]}
                      >
                        مشاهده همه نتایج
                      </Link>
                    </div>
                  </>
                ) : (
                    <div className={styles["search-box__error-box"]}>
                    <span>نتیجه ای یافت نشد</span>
                  </div>
                )}
              </>
            )} */}

            {/* {isError && ( */}
            {false && (
              <div className={styles["search-box__error-box"]}>
                <span>خطا در دریافت داده ها</span>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
