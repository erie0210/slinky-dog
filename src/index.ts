import express from 'express';

import { User } from './User';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * 현재와 반대되도록 구현
 *
 * 결과:
 * {
 *     "name": "joielee",
 *     "isFollowing": false
 * }
 */
app.post('/api/v1/follow', (req, res) => {
  const user = User.withFollowing(req.body.name); // 팔로우 중인 유저를 조회대신 생성
  user.toggleFollowingStatus(); // 팔로우 상태를 토글
  res.json(user);
});

/**
 * 설정하고자 하는 상태 값을 받아 그대로 되도록 설정한다.
 *
 * 결과: request의 "follow" 값에 따라 팔로우 상태가 변경된다.
 */
app.post('/api/v2/follow', (req, res) => {
  const { follow } = req.body;
  const user = User.withFollowing(req.body.name);

  user.updateFollowingStatus(follow); // 팔로우 상태를 설정
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
