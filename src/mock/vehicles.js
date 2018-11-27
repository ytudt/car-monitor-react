import Mock from 'mockjs';

Mock.mock(/api\/vehicle\/list$/, 'get', {
  "success": true,
  "data": [
    {"id": 111, "licenseNumber": "京Q83YC7", "lat": 39.9077, "lng": 116.426285, "online": true},
    {"id": 12, "licenseNumber": "京Q94YB8", "lat": 39.9377, "lng": 116.437285, "online": false},
    {"id": 12, "licenseNumber": "京PT7P52", "lat": 39.9677, "lng": 116.448285, "online": false},
    {"id": 12, "licenseNumber": "京Q15XY6", "lat": 39.9977, "lng": 116.459285, "online": true},
    {"id": 12, "licenseNumber": "京Q1Y2U6", "lat": 39.9177, "lng": 116.460285, "online": false},
  ],
  "messageCode": null,
  "message": "登录成功!"
});

Mock.mock(/api\/vehicle\/location/, 'get', {
  "success": true,
  "data": {

    data: {
      temp: 10,
    }
  },
  "messageCode": null,
  "message": "登录成功!"
});

Mock.mock(/api\/vehicle\/京Q83YC7/, 'get', {
  "success": true,
  "data": [{
    "lat": 39.90015,
    "lng": 116.3466,
  }, {
    "lat": 39.80015,
    "lng": 116.3466,
  },
    {
      "lat": 39.70015,
      "lng": 116.3466,
    },
    {
      "lat": 39.60015,
      "lng": 116.3466,
    },
    {
      "lat": 39.50015,
      "lng": 116.3466,
    }

  ],
  "messageCode": null,
  "message": "登录成功!"
});


Mock.mock(/api\/vehicle\/京Q94YB8/, 'get', {
  "success": true,
  "data": [{
    "lat": 39.90015,
    "lng": 116.3466,
  }, {
    "lat": 39.80015,
    "lng": 116.3466,
  },
    {
      "lat": 39.70015,
      "lng": 116.3466,
    },
    {
      "lat": 39.60015,
      "lng": 116.3466,
    },
    {
      "lat": 39.50015,
      "lng": 116.3466,
    }

  ],
  "messageCode": null,
  "message": "登录成功!"
});


Mock.mock(/api\/vehicle\/京A22222/, 'get', {
  "success": true,
  "data": [{
    "lat": 39.90015,
    "lng": 116.5466,
  }, {
    "lat": 39.80015,
    "lng": 116.5466,
  },
    {
      "lat": 39.70015,
      "lng": 116.5466,
    },
    {
      "lat": 39.60015,
      "lng": 116.5466,
    },
    {
      "lat": 39.50015,
      "lng": 116.5466,
    }

  ],
  "messageCode": null,
  "message": "登录成功!"
});

Mock.mock(/api\/order\/list/, 'get', [{
  escort: '张三',
  salesman: '李四',
}]);

