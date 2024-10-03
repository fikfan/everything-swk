<!-- components/BusinessSubmissionDialog.vue -->
<template>
  <Dialog>
    <DialogTrigger class="w-full justify-center text-center mt-4">
      <Button>Want to feature a business?</Button>
      
    </DialogTrigger>
    <DialogContent class="px-4">
      <DialogHeader>
        <DialogTitle>Contribute</DialogTitle>
        <DialogDescription>
          Help us grow our directory by submitting a local business.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4">
        <div>
          <Label for="name" class="text-right mb-2">
            Name
          </Label>
          <Input v-model="businessName" />
        </div>
        
        <div>
          <Label for="category" class="text-right mb-2">
            Category
          </Label>
          <Input v-model="businessCategory"  />
        </div>

        <div> 
          <Label for="phone" class="text-right mb-2">
            Phone
          </Label>
          <Input v-model="businessPhone"  />
        </div>

        <div>
          <Label for="hours" class="text-right mb-2">
            Hours
          </Label>
          <Input v-model="businessHours" />
        </div>

        <div>
          <Label for="location" class="text-right mb-2">
            Location
          </Label>
          <Input v-model="businessLocation"  />
        </div>

        <div>
          <Label for="secret" class="text-right mb-2">
            Secret Password
          </Label>
          <Input type="password" v-model="secretPassword" placeholder="Enter secret key.."></Input>
        </div>
        
       
      </div>
      <DialogFooter>
        <div class="flex justify-center gap-2">
          <Button variant="destructive" @click="clearForm">Clear</Button>
          <Button class="w-fit" :variant="isValidPassword ? '' : 'secondary'" :disabled="!isValidPassword">
            Submit
          </Button>
        </div>
        
        
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'



const businessName = ref('');
const businessCategory = ref('');
const businessHours = ref('');
const businessLocation = ref('');
const businessPhone = ref('');
const secretPassword = ref('');


const clearForm = () => {
  businessName.value = ''
  businessCategory.value = ''
  businessHours.value = ''
  businessLocation.value = ''
  businessPhone.value = ''
  secretPassword.value = ''
}

// secret key
const config = useRuntimeConfig();
const secret = String(config.public.secretKey);
const isValidPassword = computed(() => secretPassword.value === secret)

</script>