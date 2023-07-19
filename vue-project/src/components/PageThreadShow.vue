<template>
    <div class="col-large push-top">
      <h1>thread {{ id }}</h1>
    </div>
</template>


<script>
export default {
    props: {
          id: {
            required: true,
            type: String
          }
        }
}
</script>