import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useState, useCallback, useEffect} from 'react';


const AvailableMeals = () => {
  
  const [meals, setMeals] =useState([]);
  const [isLoading,setIsLoading] =useState(false);
  const [error,setError] =useState(null);

  const fetchMealsHandler = useCallback(async ()=>{
    setIsLoading(true);
    setError(null);
    try{
      const response =await fetch('https://webshop-b771a-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      //default method: GET
      //fetch returns a promise->that is why we should use async await
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json(); //getting the data ,returns an object
      const loadedMeals =[];

      for(const key in data){
        loadedMeals.push({
          id:key,
          name: data[key].name,
          description : data[key].description,
          price : +data[key].price
        });
      }
      setMeals(loadedMeals);
    }
    catch(error){
      setError(error.message);
    }
    setIsLoading(false);
  },[]);
  
  useEffect(()=>{ //should not return a promise ->1. paramn should not be an async function!!
    fetchMealsHandler();
  },[fetchMealsHandler]);


  const mealslist = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content =<p>Found no datas</p>
  if(meals.length>0){
    content =<ul>{mealslist}</ul>;
  }
  if(error){
    content =<p>{error}</p>;
  }
  if(isLoading){
    content = <p>Loading....</p>
  }
  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
