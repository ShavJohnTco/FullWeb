<template>
    <div>
        <h1>Main page</h1>
        <router-link :to="{name: 'HomePage'}" :class="class_name">Home page</router-link>
        <router-link :to="{name: 'FormExample'}">Form Page</router-link>
        <div>
            <router-link :to="{name: 'Users'}">Users</router-link>
        </div>
        <div>
            <router-link :to="{name: 'Products'}">Products</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                class_name: 'text-danger',
                num: 0,
                some_data: [
                    {id: 2, val: 545},
                    {id: 3, val: 545},
                    {id: 4, val: 545},
                    {id: 5, val: 545},
                ]
            }
        },
        methods: {

        },
        computed: {
            randText() {
                return 'Text'
            }
        },
        beforeMount(){

        },
        mounted() {
            setInterval(() => {
                this.num++
            }, 500)
        },
        created() {

        },
        beforeDestroy() {
            // confirm("are you sure")
        },
        destroyed() {

        }
    }
</script>

<style scoped>

</style>
