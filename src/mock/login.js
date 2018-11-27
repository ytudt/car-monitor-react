import Mock from 'mockjs';
Mock.mock(/api\/admin\/login/, 'post', {
  status: 200,
  data: 'faklsdfjsakdfasldjflasdjflsdfksj',
  success: true,
});
