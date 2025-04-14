<script setup lang="ts">

import {Button} from "~/components/ui/button";
import {ChevronLeft} from "lucide-vue-next"

useHead({
  titleTemplate: (titleChunk) => `${titleChunk} - Rater`,
})
</script>

<template>
  <div class="flex flex-col gap-3">
   <div>
     <Button as-child>
       <NuxtLink to="/" class="inline-flex gap-1">
         <ChevronLeft class="size-5"/> Home
       </NuxtLink>
     </Button>
   </div>
   <div>

   </div>
   <Card>
     <CardHeader>
       <CardTitle class="text-4xl font-bold">
         <h2>Rater</h2>
       </CardTitle>
       <CardDescription>This microservice is used to get exchange rates for crypto</CardDescription>
     </CardHeader>
     <CardContent class="space-y-3">
       <div>
         <strong>Supported Pairs:</strong>
         <ul class="list-disc list-inside">
           <li>BTC_EUR</li>
           <li>BTC_USD</li>
           <li>ETH_EUR</li>
           <li>ETH_USD</li>
         </ul>
       </div>

       <div class="space-y-3">
         <div class="text-2xl font-bold">
           <h3>Get Rate</h3>
         </div>
         <div>
           <strong>Request</strong>
           <pre class="bg-gray-100 block rounded-xs p-3 truncate">GET https://liquid-cats.com/api/rater/v1/rate/{pair}</pre>
         </div>

         <div>
           <strong>Response</strong>
           <pre class="bg-gray-100 block rounded-xs p-3">{
  "data": {
    "price": "29295.92969",
      "pair": "BTC_USD",
  },
  "status": "success"
}</pre>
         </div>

       </div>
     </CardContent>

   </Card>

  </div>
</template>