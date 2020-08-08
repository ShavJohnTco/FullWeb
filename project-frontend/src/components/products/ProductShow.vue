<template>
    <b-container>
        <b-form>
            <b-form-group label="Name">
                <b-form-input
                    v-model="product.name"
                    type="text"
                    disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Category">
                <b-form-input
                    v-model="product.category"
                    type="text"
                    disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Description">
                <b-form-textarea
                    v-model="product.description"
                    disabled
                ></b-form-textarea>
            </b-form-group>
            <b-form-group label="Price">
                <b-form-input
                    v-model="product.price"
                    type="number"
                    step="0.01"
                    disabled
                ></b-form-input>
            </b-form-group>
        </b-form>
        <div>
            <router-link :to="{name: 'Products'}" class="btn btn-dark">
                <span>Cancel</span>
            </router-link>
        </div>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            product_id: this.$route.params.product_id
        }
    },
    mounted() {
        this.$store.dispatch('getProduct', this.product_id)
    },
    computed: {
        product() {
            return this.$store.getters.currentProduct
        }
    }
}
</script>

<style scoped>

</style>

