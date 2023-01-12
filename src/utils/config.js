/*
 * @Author: lh@metgs.com
 * @Date: 2023-01-11 16:16:39
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-11 16:35:08
 * @Description: ...
 */


export const sendWays = {
  notification: 'notification', // 弹窗
  textMessage: 'textMessage', // 文字消息
  voiceMessage: 'voiceMessage', // 语音消息
};


export const messages = [
  {
    name: '1、3、6小时天气联防',
    children: [
      {
        id: '1010',
        notification: true,
      },
      {
        id: '1020',
        notification: false,
      },
    ],
  },
  {
    name: '风',
    children: [
      {
        id: '1030',
        notification: true,
      },
    ],
  },
  {
    name: '短临1、3小时强天气',
    children: [
      {
        id: '1040',
        notification: true,
      },
    ],
  },
  {
    name: '08时、20时天气通报',
    children: [
      {
        id: '1050',
        notification: true,
      },
    ],
  },
  {
    name: '能见度',
    children: [
      {
        id: '1060',
        notification: false,
      },
    ],
  },
  {
    name: '预警信号',
    children: [
      {
        id: '1070',
        notification: false,
      },
    ],
  },
  {
    name: '实况通报',
    children: [
      {
        id: '1080',
        notification: false,
      },
      {
        id: '1090',
        notification: false,
      },
    ],
  },

];
