import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

import citiesList from '../../assets/json/cities.json';
import api from '../../services/api';
import { Container, Form, Input, InputCity, IconSearch } from './styles';

export default function Initial() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    debugger;
    const citiesJson = citiesList.map((cityJson) => {
      return {
        id: cityJson.id,
        name: cityJson.name,
        country: cityJson.country,
      };
    });
    setCities(citiesJson);
  }, []);

  async function handleInput(text) {
    api.get(`q=${text}&appid=1e40d89adb3eab69f3236d2a702002de`).then((item) => {
      setCity(item.name);
    });
  }

  const Item = (city) => {
    return (
      <TouchableOpacity
        // style={styles.button}
        onPress={() => handleGetWeather(city.name)}
      >
        <Text style={{ fontSize: 15, color: '#000' }}>{city.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Form>
        <InputCity>
          <Input
            autoCorrect={false}
            placeholder="Procurar Cidade"
            onChangeText={(text) => handleInput(text)}
          />
          <IconSearch backgroundColor="#333" name="location-on" />
        </InputCity>
      </Form>
      <Text style={{ fontSize: 20 }}>Cities</Text>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item: city }) => <Item {...city} />}
      />
    </Container>
  );
}

Initial.navigationOptions = {
  title: 'Página Inicial',
};
