import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RandomNumber = ({num, uniqueId, gameStatus, selectedIds, handleSelectedIds}) => {
  const [isNumberSelected, setIsNumberSelected] = useState(false);

  const handlePress = (Num, UniqueId) => {
    if(selectedIds.includes(uniqueId) || gameStatus !== "PLAYING") { return; }

    handleSelectedIds(Num, UniqueId);
  };

  useEffect(() => {
    if (selectedIds.includes(uniqueId) || gameStatus !== "PLAYING") {
      setIsNumberSelected(() => true);
    }
  }, [uniqueId, selectedIds, gameStatus]);

  return (
    <TouchableOpacity onPress={() => handlePress(num, uniqueId)}>
      <Text className={`text-slate-50 bg-gray-500 pt-2 pb-1 m-6 text-center text-4xl font-semibold rounded-lg w-20 ${isNumberSelected ? "opacity-40" : ""}`}>{num}</Text>
    </TouchableOpacity>
  );
};

export default RandomNumber;
