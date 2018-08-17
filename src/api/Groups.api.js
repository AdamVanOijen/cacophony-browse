import Config from '../../app.config';
import { fetch } from './fetch';

export default {
  addNewGroup,
  getGroups,
  addGroupUser,
  removeGroupUser
};

function addNewGroup(groupName) {
  const body = `groupname=${encodeURIComponent(groupName)}`;

  return fetch(
    `${Config.api}/api/v1/groups`,
    {
      method: "POST",
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    }
  );
}

function addGroupUser(groupId, userName, isAdmin) {
  const body = `groupId=${encodeURIComponent(groupId)}&userId=${encodeURIComponent(userName)}&admin=${encodeURIComponent(isAdmin)}`;

  return fetch(
    `${Config.api}/api/v1/groups/users`,
    {
      method: "POST",
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    }
  );
}

function removeGroupUser(groupId, userId) {
  const body = `groupId=${encodeURIComponent(groupId)}&userId=${encodeURIComponent(userId)}`;

  return fetch(
    `${Config.api}/api/v1/groups/users`,
    {
      method: "DELETE",
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    }
  );
}

async function getGroups(groupname) {
  const where = JSON.stringify({groupname});
  const body = `where=${where}`;

  return await fetch(
    `${Config.api}/api/v1/groups?${body}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    }
  );
}
