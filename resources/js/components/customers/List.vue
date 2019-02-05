<template>
    <div class="container">
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Customer Avaliable</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.name  }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ sutomer.phone  }}</td>
                        <td>
                            <router-link :to="`/customer/${customer.id}`">View</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : 'list',
    computed : {
        customers() {
            return this.$store.getters.customers
        }
    }
}
</script>

<style>

</style>
