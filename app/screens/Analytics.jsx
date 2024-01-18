// Analytics.jsx

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory-native";
import { db, ref, onValue } from "../../FirebaseConfig";

const Analytics = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = ref(db);
      onValue(data, (snapshot) => {
        const newTemperatureData = [
          ...temperatureData,
          { x: temperatureData.length, y: snapshot.val().test.temperature },
        ];
        const newHumidityData = [
          ...humidityData,
          { x: humidityData.length, y: snapshot.val().test.humidity },
        ];
        setTemperatureData(newTemperatureData);
        setHumidityData(newHumidityData);
      });
    };

    const fetchDataInterval = setInterval(fetchData, 3000);

    return () => clearInterval(fetchDataInterval);
  }, [db, temperatureData, humidityData]);

  return (
    <View>
      <View>
        <Text>Temperature Chart</Text>
        <VictoryChart>
          <VictoryLine data={temperatureData} />
          <VictoryAxis label="Time" />
          <VictoryAxis dependentAxis label="Temperature" />
        </VictoryChart>
      </View>
      <View>
        <Text>Humidity Chart</Text>
        <VictoryChart>
          <VictoryLine data={humidityData} />
          <VictoryAxis label="Time" />
          <VictoryAxis dependentAxis label="Humidity" />
        </VictoryChart>
      </View>
    </View>
  );
};

export default Analytics;
