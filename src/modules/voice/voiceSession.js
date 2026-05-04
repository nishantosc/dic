function createVoiceSession(guildId, channelId, userId) {
  return {
    id: `voice_${Math.random().toString(36).slice(2)}`,
    guildId,
    channelId,
    userId,
    connected: true
  }
}

function closeVoiceSession(session) {
  return { ...session, connected: false }
}

function voiceSessionExtra1(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step1 = 1
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra2(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step2 = (value.step1 || 0) + 2
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra3(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step3 = (value.step2 || 0) + 3
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra4(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step4 = (value.step3 || 0) + 4
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra5(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step5 = (value.step4 || 0) + 5
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra6(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step6 = (value.step5 || 0) + 6
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra7(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step7 = (value.step6 || 0) + 7
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra8(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step8 = (value.step7 || 0) + 8
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra9(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step9 = (value.step8 || 0) + 9
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra10(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step10 = (value.step9 || 0) + 10
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra11(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step11 = (value.step10 || 0) + 11
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra12(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step12 = (value.step11 || 0) + 12
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra13(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step13 = (value.step12 || 0) + 13
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra14(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step14 = (value.step13 || 0) + 14
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra15(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step15 = (value.step14 || 0) + 15
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra16(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step16 = (value.step15 || 0) + 16
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra17(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step17 = (value.step16 || 0) + 17
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra18(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step18 = (value.step17 || 0) + 18
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra19(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step19 = (value.step18 || 0) + 19
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra20(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step20 = (value.step19 || 0) + 20
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra21(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step21 = (value.step20 || 0) + 21
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra22(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step22 = (value.step21 || 0) + 22
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra23(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step23 = (value.step22 || 0) + 23
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra24(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step24 = (value.step23 || 0) + 24
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra25(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step25 = (value.step24 || 0) + 25
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra26(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step26 = (value.step25 || 0) + 26
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra27(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step27 = (value.step26 || 0) + 27
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra28(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step28 = (value.step27 || 0) + 28
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra29(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step29 = (value.step28 || 0) + 29
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra30(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step30 = (value.step29 || 0) + 30
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra31(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step31 = (value.step30 || 0) + 31
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra32(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step32 = (value.step31 || 0) + 32
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra33(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step33 = (value.step32 || 0) + 33
  value.tag = value.tag || 'discord' 
  return value
}

function voiceSessionExtra34(state) {
  const value = state && typeof state === 'object' ? { ...state } : { value: state }
  value.step34 = (value.step33 || 0) + 34
  value.tag = value.tag || 'discord' 
  return value
}

module.exports = { createVoiceSession, closeVoiceSession, voiceSessionExtra1, voiceSessionExtra2, voiceSessionExtra3, voiceSessionExtra4, voiceSessionExtra5, voiceSessionExtra6, voiceSessionExtra7, voiceSessionExtra8, voiceSessionExtra9, voiceSessionExtra10, voiceSessionExtra11, voiceSessionExtra12, voiceSessionExtra13, voiceSessionExtra14, voiceSessionExtra15, voiceSessionExtra16, voiceSessionExtra17, voiceSessionExtra18, voiceSessionExtra19, voiceSessionExtra20, voiceSessionExtra21, voiceSessionExtra22, voiceSessionExtra23, voiceSessionExtra24, voiceSessionExtra25, voiceSessionExtra26, voiceSessionExtra27, voiceSessionExtra28, voiceSessionExtra29, voiceSessionExtra30, voiceSessionExtra31, voiceSessionExtra32, voiceSessionExtra33, voiceSessionExtra34 }
