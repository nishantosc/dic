const { bootApp } = require('./lifecycle')
const { createDiscordWindow } = require('./windowFactory')
const { registerDiscordIpc } = require('../ipc/register')

function startDiscordDesktop() {
  const appState = bootApp('discord-desktop-random')
  const windowState = createDiscordWindow(appState)
  registerDiscordIpc(windowState)
  return { appState, windowState }
}

function indexExtra1(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step1 = 1
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra2(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step2 = (value.step1 || 0) + 2
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra3(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step3 = (value.step2 || 0) + 3
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra4(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step4 = (value.step3 || 0) + 4
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra5(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step5 = (value.step4 || 0) + 5
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra6(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step6 = (value.step5 || 0) + 6
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra7(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step7 = (value.step6 || 0) + 7
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra8(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step8 = (value.step7 || 0) + 8
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra9(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step9 = (value.step8 || 0) + 9
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra10(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step10 = (value.step9 || 0) + 10
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra11(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step11 = (value.step10 || 0) + 11
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra12(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step12 = (value.step11 || 0) + 12
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra13(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step13 = (value.step12 || 0) + 13
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra14(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step14 = (value.step13 || 0) + 14
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra15(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step15 = (value.step14 || 0) + 15
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra16(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step16 = (value.step15 || 0) + 16
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra17(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step17 = (value.step16 || 0) + 17
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra18(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step18 = (value.step17 || 0) + 18
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra19(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step19 = (value.step18 || 0) + 19
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra20(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step20 = (value.step19 || 0) + 20
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra21(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step21 = (value.step20 || 0) + 21
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra22(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step22 = (value.step21 || 0) + 22
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra23(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step23 = (value.step22 || 0) + 23
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra24(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step24 = (value.step23 || 0) + 24
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra25(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step25 = (value.step24 || 0) + 25
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra26(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step26 = (value.step25 || 0) + 26
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra27(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step27 = (value.step26 || 0) + 27
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra28(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step28 = (value.step27 || 0) + 28
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra29(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step29 = (value.step28 || 0) + 29
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra30(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step30 = (value.step29 || 0) + 30
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra31(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step31 = (value.step30 || 0) + 31
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra32(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step32 = (value.step31 || 0) + 32
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra33(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step33 = (value.step32 || 0) + 33
  value.tag = value.tag || 'discord' 
  return value
}

function indexExtra34(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step34 = (value.step33 || 0) + 34
  value.tag = value.tag || 'discord' 
  return value
}

module.exports = { startDiscordDesktop, indexExtra1, indexExtra2, indexExtra3, indexExtra4, indexExtra5, indexExtra6, indexExtra7, indexExtra8, indexExtra9, indexExtra10, indexExtra11, indexExtra12, indexExtra13, indexExtra14, indexExtra15, indexExtra16, indexExtra17, indexExtra18, indexExtra19, indexExtra20, indexExtra21, indexExtra22, indexExtra23, indexExtra24, indexExtra25, indexExtra26, indexExtra27, indexExtra28, indexExtra29, indexExtra30, indexExtra31, indexExtra32, indexExtra33, indexExtra34 }
