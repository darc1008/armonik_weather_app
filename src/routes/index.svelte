<script>
import {getWeatherFrom} from '../services/weather'
const weatherPromise=getWeatherFrom();
</script>
{#await weatherPromise then weather}
<div>
    {weather.name}
</div>

    

    
    
{/await}



<style>

div{
    color:aliceblue;
}
    
</style>