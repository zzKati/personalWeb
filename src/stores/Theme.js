import { defineStore } from "pinia"
import {ref} from 'vue'

export const webThemeStore = defineStore("webTheme", () => {
    const isDark = ref(false)
    const changeTheme = () => {
        isDark.value = !isDark.value
    }
    return {isDark,changeTheme}
})