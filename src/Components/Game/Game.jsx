import React, { useEffect, useMemo, useState } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import RandomNumber from './RandomNumber';

const Game = ({randomNumberCount, initialSeconds, handleReset, lostCount, wonCount, handleRefresh}) => {
  const [sum, setSum] = useState(0);
  const [gameStatus, setGameStatus] = useState("PLAYING");
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [selectedNumbers, setSelectedNumbers] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [randomNumberArray, setRandomNumberArray] = useState([]);

  useMemo(() => {
    const randomNumber = Array.from({length: randomNumberCount}).map(() => 1 + Math.floor((10 + wonCount) * Math.random()));

    const shuffleArray = () => {
      let newArray = [...randomNumber]; // Make a copy of the array
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      return newArray;
    };

    setRandomNumberArray(() => shuffleArray().map((num, index) => ({id: index, num})));

    setSum(() => shuffleArray().slice(0, randomNumberCount - 2).reduce((acc, curr) => acc + curr, 0));
  }, [randomNumberCount, wonCount]);


  const handleSelectedIds_Numbers = (newNumber, uniqueId) => {
    let total = selectedNumbers + newNumber;

    setSelectedIds((prev) => [...prev, uniqueId]);
    setSelectedNumbers((prev) =>  prev + newNumber);

    if (total === sum) {
      setGameStatus(() => "WON");
      return;
    }

    if (total > sum) {
      setGameStatus(() => "LOST");
      return;
    }
  };

  const gameStatusColorChange = () => {
    return gameStatus === "WON" 
      ? "bg-green-500" 
      : gameStatus === "LOST" 
      ? "bg-red-600" 
      : "bg-gray-500";
  };

  useEffect(() => {
    if (gameStatus !== "PLAYING") {return;}

    if (remainingSeconds === 0) {
      setGameStatus(() => "LOST");
      return;
    }

    let timer = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingSeconds, gameStatus]);

  return (
    <View className="w-full max-w-xs bg-slate-700 p-3 pb-6 rounded-2xl gap-y-6 relative isolate">
      <Text className="text-slate-50">Time: {remainingSeconds} s &nbsp;&nbsp; Won: {wonCount}  &nbsp;&nbsp;  Lost: {lostCount}</Text>

      <TouchableHighlight onPress={handleRefresh} className="absolute top-1 right-1">
        <Text className="text-slate-50 font-semibold text-2xl">&#8634;</Text>
      </TouchableHighlight>

      <View className={`bg-gray-500 pt-4 pb-1.5 px-2 rounded-md my-0 items-center justify-center relative isolate ${gameStatusColorChange()}`}>
        <Text className="text-slate-50 text-5xl font-semibold">{sum}</Text>

        <Text className="text-slate-50 absolute top-full right-1 font-medium tracking-wide">{gameStatus}</Text>
      </View>

      <View className="flex-row flex-wrap justify-around mb-6">
        {randomNumberArray.map((num) => (
          <RandomNumber 
            key={num.id} 
            uniqueId={num.id} 
            num={num.num} 
            gameStatus={gameStatus}
            selectedIds={selectedIds} 
            handleSelectedIds={handleSelectedIds_Numbers}
          />
        ))}
      </View>

      <Button
        onPress={() => handleReset(gameStatus)}
        title="Play Again"
        disabled={gameStatus === "PLAYING"  && remainingSeconds !== 0}
      />
    </View>
  );
};

export default Game;
