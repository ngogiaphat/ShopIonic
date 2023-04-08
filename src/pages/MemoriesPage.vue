<template>
    <base-layout page-title='All Memories'>
        <ion-list>
            <ion-item router-link="/memories/1">
                Venti
            </ion-item>
            <ion-item>
                Zhongli
            </ion-item>
            <ion-item>
                Ei
            </ion-item>
            <ion-item>
                Nahida
            </ion-item>
        </ion-list>
    </base-layout>
</template>
<script>
    import { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent 
    } from '@ionic/vue';
    export default {
        components: {
            IonList,
            IonItem,
        },
    };
</script>
<style scoped>
   ion-title {
        background-color: red;
   }
</style>