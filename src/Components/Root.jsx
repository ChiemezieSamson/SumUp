<script src="http://localhost:8097" />;
import React, { useState } from 'react';
import { View } from 'react-native';
import Game from './Game/Game';

const Root = () => {
  const [reSet, setReSet] = useState(0);
  const [wonCount, setWonCount] = useState(0);
  const [lostCount, setLostCount] = useState(0);

  const handleReset = (status) => {
    if (status === "WON") {
      setWonCount((prev) => prev + 1);
    }

    if (status === "LOST") {
      setLostCount((prev) => prev + 1);
    }

    setReSet((prev) => prev + 1);
  };

  const handleRefresh = () => {
    setReSet(() => 0);
    setWonCount(() => 0);
    setLostCount(() => 0);
  };

  return (
    <View className="flex-1 bg-slate-900 items-center justify-center">
      <Game 
        key={reSet} 
        wonCount={wonCount}
        lostCount={lostCount}
        randomNumberCount={6} 
        initialSeconds={10}
        handleRefresh={handleRefresh}
        handleReset={handleReset} 
      />
    </View>
  );
};

export default Root;
