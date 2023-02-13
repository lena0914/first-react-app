import { useEffect, useState } from "react";
const Converter = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [targetCoin, setTargetCoin] = useState("BTC");
  const [targetCoinPrice, setTargetCoinPrice] = useState(1 / 22672.36896151474);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const onCurrencyChangeHandle = (e) => {
    const coinId = e.target.value;
    const targetCoin = coins.find((coin) => coin.id === coinId);

    setTargetCoin(targetCoin?.symbol);
    setTargetCoinPrice(targetCoin?.quotes.USD.price);
  };

  const onChangeHandle = (e) => {
    setConvertedAmount(e.target.value * (1 / targetCoinPrice));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <div>
        <form>
          <input type="text" onChange={onChangeHandle} />
        </form>
        <span>
          USD is equal to
          {convertedAmount}
          {targetCoin}
        </span>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onCurrencyChangeHandle}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} {coin.symbol}: {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
