<template>
    <b-container>
        <b-form>
            <b-form-group label="Name">
                <b-form-input
                    v-model="product.name"
                    :value="product_item.name"
                    type="text"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Category">
                <b-form-input
                   v-model="product.category"
                   :value="product_item.category"
                    type="text"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Description">
                <b-form-textarea
                    v-model="product.description"
                    :value="product_item.description"
                    required
                ></b-form-textarea>
            </b-form-group>
            <b-form-group label="Price">
                <b-form-input
                    v-model="product.price"
                    :value="product_item.price"
                    type="number"
                    step="0.01"
                    required
                ></b-form-input>
            </b-form-group>
        </b-form>
            <div>
                <button class="btn btn-success" @click="updateProduct">
                    <b-spinner v-if="loader" variant="white"></b-spinner>
                    <span v-else>Update</span>
                </button>
            </div>
    </b-container>
</template>

<script>

export default {
    data() {
        return {
            product_item: {},
            loader: false,
            product_id: this.$route.params.product_id,
        }
    },
    methods: {
        updateProduct() {
            if(this.loader) return;
            this.loader = true;
            this.$store.dispatch('updateProduct', this.product).then(() => {
                this.$router.push('/products');
            }).finally(() => {
                this.loader = false
            });
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
