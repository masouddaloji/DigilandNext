import { useState, useEffect, ChangeEvent } from "react";
import styles from "./PriceSlider.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PriceSlider() {
  const [price, setPrice] = useState<string>("0/300000000");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const gap = 100000;
  const maxPrice = 300000000;

  const [progressBarStyle, setProgressBarStyle] = useState({
      left: `${(Number(price.split("/")[0]) / maxPrice) * 100}%`,
      right: `${100 - (Number(price.split("/")[1]) / maxPrice) * 100}%`,
  });

  const changeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const arrayPrices = price.split("/");
    if (Number(arrayPrices[1]) - Number(value) < gap) {
      const newMinPrice = Number(arrayPrices[1]) - gap;
      setPrice(`${newMinPrice.toString()}/${arrayPrices[1]}`);
    } else {
      setPrice(`${value}/${arrayPrices[1]}`);
    }
  };

  const changeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const arrayPrices = price.split("/");
    if (Number(value) - Number(arrayPrices[0]) < gap) {
      const newMaxPrice = Number(arrayPrices[0]) + gap;
      setPrice(`${arrayPrices[0]}/${newMaxPrice.toString()}`);
    } else {
      setPrice(`${arrayPrices[0]}/${value}`);
    }
  };

  const filteredByPrices = () => {
    const params=new URLSearchParams(searchParams)
    params.set("price",price)
    replace(`${pathname}?${params.toString()}`)
  };

  useEffect(() => {
    const arrayPrices = price.split("/");
    setProgressBarStyle({
      left: `${(Number(arrayPrices[0]) / maxPrice) * 100}%`,
      right: `${100 - (Number(arrayPrices[1]) / maxPrice) * 100}%`,
    });
  }, [price, maxPrice]);
  
  useEffect(()=>{
    setPrice(searchParams.get("price")??"0/300000000") 
},[searchParams])

  return (
    <div className={styles.priceSlider}>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={progressBarStyle}></div>
        <input
          className={`${styles.progress__input} ${styles.min__range}`}
          type="range"
          min={0}
          max={maxPrice}
          step={10000}
          value={price.split("/")[0]}
          onInput={changeInputMin}
        />
        <input
          className={`${styles.progress__input} ${styles.max__range}`}
          type="range"
          min={gap}
          max={maxPrice}
          step={10000}
          value={price.split("/")[1]}
          onInput={changeInputMax}
        />
      </div>
      <div className={styles.priceSlider__details}>
        <div className={`${styles.priceSlider__priceInfo} ss02`}>
          <div className={styles.priceSlider__pricess}>
            <p>
              {" "}
              از : <span>
                {Number(price.split("/")[0]).toLocaleString()}
              </span>{" "}
              تومان{" "}
            </p>
            <p>
              {" "}
              تا : <span>
                {Number(price.split("/")[1]).toLocaleString()}
              </span>{" "}
              تومان{" "}
            </p>
          </div>
        </div>
        <button className={styles.priceSlider__btn} onClick={filteredByPrices}>
          فیلتر
        </button>
      </div>
    </div>
  );
}
