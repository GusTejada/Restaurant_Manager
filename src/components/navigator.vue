<template>
  <div id="nav">
    <router-link to="/menu">
      <i class="pi pi-calendar"></i>Menu
    </router-link>|
    <router-link to="/products">
      <i class="pi pi-calendar"></i>Products
    </router-link>|
    <router-link to="/booking">
      <i class="pi pi-calendar"></i>Booking
    </router-link>|
    <router-link to="/bills">
      <i class="pi pi-dollar"></i>Bills
    </router-link>|
    <router-link to="/employees">
      <i class="pi pi-users"></i>Employees
    </router-link>
    <router-link to="/Lounge">
      <i class="pi pi-users"></i>Lounge
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Navigator"
};
</script>