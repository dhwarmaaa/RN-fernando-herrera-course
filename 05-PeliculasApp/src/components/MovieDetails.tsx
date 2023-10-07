import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {CastItem} from './CastItem';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text> {movieFull.vote_average}</Text>
          {<Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>}
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>

        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>
          {movieFull.overview}
        </Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>
          {movieFull.budget}
        </Text>
        {/* Casting */}
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
              marginHorizontal: 20,
            }}>
            Actores
          </Text>

          <FlatList
            data={cast}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
