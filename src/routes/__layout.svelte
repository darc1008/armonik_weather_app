<div>
    <slot />
</div>
<!--box-shadow: 0 0 100px rgba(103, 82, 151, 0.1);-->


<style>
    :global(body){
        display: grid;
        place-content: center;
        min-height: 100vh;
        background-color: #1a1a30;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    div{
        aspect-ratio: 9/16;
        width:400px;
        max-width: 100%;
        display: block;
        background-color: #1a1a30;
        border-radius: 10px;

    }
   
</style>