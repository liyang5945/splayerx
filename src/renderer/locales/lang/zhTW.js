export default {
  msg: {
    titleName: 'SPlayer',
    file: {
      name: '文件',
      open: '打開文件…',
      openURL: '打開 URL…',
      openRecent: '打開最近播放',
      clearHistory: '清空播放記錄',
      closeWindow: '關閉',
    },
    playback: {
      name: '播放',
      fullScreen: '全屏/退出全屏',
      keepPlayingWindowFront: '播放時保持在前',
      increasePlaybackSpeed: '加快播放速度',
      decreasePlaybackSpeed: '減緩播放速度',
      resetSpeed: '重置播放速度',
      captureScreen: '截圖',
      captureVideoClip: '截取視頻片段',
      play: '播放',
      pause: '暫停',
      forwardS: '前進 +5s',
      backwardS: '後退 -5s',
      forwardL: '前進 +60s',
      backwardL: '後退 -60s',
      singleCycle: '循環單個文件',
    },
    audio: {
      name: '音頻',
      increaseAudioDelay: '音頻延遲',
      decreaseAudioDelay: '音頻延遲',
      mute: '靜音',
      switchAudioTrack: '切換音軌',
      defaultAudioTrack: '默認',
      increaseVolume: '提高音量',
      decreaseVolume: '降低音量',
    },
    subtitle: {
      name: '字幕',
      subtitleSelect: '翻譯結果',
      AITranslation: '重新加載翻譯結果',
      menuLoading: '正在匹配翻譯結果 ...',
      loadSubtitleFile: '加載字幕文件…',
      mainSubtitle: '第一字幕',
      langZhCN: '中文',
      langEn: '英文',
      notToShowSubtitle: '無',
      noSubtitle: '暫未找到翻譯結果',
      secondarySubtitle: '第二字幕',
      firstSubItem: '第一字幕',
      secondarySubItem: '第二字幕',
      subtitleStyle: '字幕樣式',
      style1: '電影風格',
      style2: '動漫風格',
      style3: '復古風格',
      style4: '日系風格',
      style5: '現代經典',
      subtitleSize: '字幕尺寸',
      size1: '小',
      size2: '標準',
      size3: '大',
      size4: '超大',
      uploadSelectedSubtitle: '上傳所選字幕',
      increaseSubtitleDelayS: '字幕延時 +0.1s',
      decreaseSubtitleDelayS: '字幕延時 -0.1s',
      enabledSecondarySub: '啟用第二字幕',
      disabledSecondarySub: '關閉第二字幕',
      // increaseSubtitleDelayL: '字幕延时 +0.5s',
      // decreaseSubtitleDelayL: '字幕延时 -0.5s',
    },
    window: {
      name: '窗口',
      minimize: '最小化',
      enterFullScreen: '進入全屏',
      exitFullScreen: '退出全屏',
      bossKey: '老板鍵',
      originSize: '100%',
      doubleSize: '200%',
      maxmize: '最大化',
      halfSize: '50%',
    },
    help: {
      name: '幫助',
      splayerxHelp: '幫助',
    },
    splayerx: {
      about: '關於射手影音',
      preferences: '偏好設置',
      homepage: '網站',
      feedback: '反饋',
      hide: '隱藏射手影音',
      hideOthers: '隱藏其他',
      quit: '退出射手影音',
    },
    update: {
      title: '更新就緒',
      message: '更新已就緒，是否現在重啟?',
      yes: '更新',
      no: '暫不更新',
      updateInstalled: '播放器已更新至最新版本!',
    },
  },
  css: {
    titleFontSize: { fontSize: '21px' },
    versionFontSize: { fontSize: '14px' },
  },
  preferences: {
    general: {
      others: '其他',
      generalSetting: '通用設置',
      displayLanguage: '顯示語言',
      clearHistory: '退出時自動清空播放記錄',
      switchDisplayLanguages: '您可以在此修改射手影音播放器菜單、對話框中的顯示語言。',
    },
    privacy: {
      privacySetting: '智能翻譯',
      none: '無',
      settings: '設置',
      privacyConfirm: '啟用匿名信息和智能翻譯',
      setAsDefault: '將SPlayer設為默認播放器',
      languagePriority: '語言優先級',
      languageDescription: '在您觀賞影片時，射手影音會為您推送以下語言的翻譯結果。',
      primary: '首要語言',
      secondary: '次要語言',
    },
  },
  advance: {
    rateTitle: '播放速度',
    subMenu: '字幕設置',
    audioMenu: '音頻選項',
    fontSize: '字體大小',
    fontStyle: '字體樣式',
    subDelay: '字幕延遲',
    fontItems: ['小', '中', '大', '超大'],
    audioDelay: '音頻延遲',
    changeTrack: '切換軌道',
    chosenTrack: '默認',
    track: '音軌',
  },
  errorFile: {
    fileNonExist: {
      title: '未找到文件',
      content: '將從列表中移除此項目。',
    },
    emptyFolder: {
      title: '打開錯誤',
      content: '未找到可播放文件。',
    },
    addNoVideo: {
      title: '添加錯誤',
      content: '未找到可播放文件。',
    },
    default: {
      title: '打開錯誤',
      content: '暫不支持該文件類型。',
    },
    loadFailed: {
      title: '未能加載字幕',
      content: '暫不支持該字幕類型。',
    },
    offLine: {
      title: '未能連接網絡',
      content: '建議您檢查網絡狀況後重試。',
    },
    timeout: {
      title: '網絡請求超時',
      content: '網絡延遲或雲端異常。',
    },
  },
  loading: {
    title: '',
    content: '正在智能匹配翻譯結果 ...',
  },
  uploading: {
    title: '',
    content: '字幕正在上傳中 ...',
  },
  uploadingSuccess: {
    title: '上傳成功',
    content: '字幕已成功上傳。',
  },
  uploadingFailed: {
    title: '上傳失敗',
    content: '請稍後重試。',
  },
  privacyBubble: {
    masVersion: {
      content: '智能翻譯功能需要您同意通過匿名方式上傳媒體信息至服務端，否則將無法使用該功能獲取翻譯結果，我們不會收集關於您個人的隱私信息。',
      agree: '啟用',
      disagree: '禁用',
    },
    tryToDisable: {
      partOne: '射手影音使用匿名信息以提供更好服務，',
      partTwo: '匿名信息會導致智能翻譯無法使用。',
      underlinedContent: '禁用',
      button: '確定',
    },
    confirmDisable: {
      partOne: '確認',
      partTwo: '匿名信息和智能翻譯。',
      underlinedContent: '禁用',
      button: '取消',
    },
  },
  recentPlaylist: {
    folderSource: '文件夾',
    playlistSource: '播放列表',
    playing: '正在播放',
  },
  nextVideo: {
    nextInFolder: '文件夾中下一視頻',
    nextInPlaylist: '播放列表中下一視頻',
  },
  subtitle: {
    embedded: '內嵌',
    language: {
      zh: '中文 (簡體)',
      'zh-CN': '中文 (簡體)',
      'zh-TW': '中文 (繁體)',
      en: '英文',
      es: '西班牙文',
      ja: '日文',
      fr: '法文',
      ko: '韓文',
      pt: '葡萄牙文 (葡萄牙、巴西)',
      ar: '阿拉伯文',
      de: '德文',
      ru: '俄文',
      hi: '北印度文',
      it: '義大利文',
    },
  },
};
