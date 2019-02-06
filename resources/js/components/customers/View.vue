<template>
    <div class="customer-view" v-if="customer">
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <router-link to="/customers">Back to all Customers</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "customer-view",
    created() {
        if(this.customers.length) {
            this.customer = this.customers.find((customer) => customer.id == this.$route.params.id)
        } else {
            axios.get(`/api/customer/${this.$route.params.id}`)
            .then((response) => {
                this.customer = response.data.customer
            })
        }
    },
    data() {
        return {
            customer : null
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
        customers() {
            return this.$store.getters.customers;
        }
    }
}
</script>

<style>

</style>
