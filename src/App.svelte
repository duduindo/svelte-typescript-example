<script type="text/ts">
  import Person from './person'

  /*
   *
   * Note: eslint-plugin-svelte3 doesn't support preprocessor
   *
   * Details: https://github.com/sveltejs/eslint-plugin-svelte3/issues/10
   *
   */
  const person: Person = new Person()
  const name: string = person.getName()
  const msg: string = 'Hello, World!'
</script>


<style type="text/stylus">
  @import 'colors'

  .c-heading
    color $color-blue
</style>


<h1 class="c-heading">{msg}</h1>
<h2 class="c-heading">Person's name: <u>{name}</u></h2>
