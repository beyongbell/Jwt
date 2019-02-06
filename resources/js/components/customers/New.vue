<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name">
                    </td>
                </tr>
                 <tr>
                    <th>Email</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.email" placeholder="Customer Name">
                    </td>
                </tr>
                 <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Name">
                    </td>
                </tr>
                 <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/customers" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Create" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import validate from 'validate.js'

export default {
    name: "new",
    data() {
        return {
            customer : {
                name  : null,
                email : null,
                phone : null,
                website : null
            },
            errors : null
        }
    },
    computed : {
        currentUser() {
            return this.$store.getters.currentUser;
        }
    },
    methods: {
        add() {
            this.errors = null;
            const constraints = this.getConstraints();
            const errors = validate(this.$data.customer, constraints);

            if(errors) {
                this.errors = errors;
            }

            axios.post('/api/customer', this.$data.customer, {
                headers: {
                    "Authorization" : `Bearer ${this.currentUser.token}`
                }
            })
            .then((response) => {
                this.$router.push('/customers')
            })
        },
        getConstraints() {
            return {
                name : {
                    presence : true,
                    length : {
                        minimum : 3,
                        message : "Must be at last 3 Characters ling"
                    }
                },
                email: {
                    presence : true,
                    email : true
                },
                phone : {
                    presence : true,
                    numericality : true,
                    length : {
                        minimum : 10,
                        message : "Must be to last 10 digits long"
                    }
                },
                website: {
                    presence : true,
                    url : true
                }
            }
        }
    }
}
</script>

<style>
.errors {
    background: lightcoral;
    border-radius: 5px;
    padding: 20px 0 2px 0;
}
</style>
