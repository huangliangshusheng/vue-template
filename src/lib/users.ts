export type User = {
    id: number;
    name: string;
};

export const get_users = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    return data.users as User[];
};

export const get_user = async (id: string) => {
    const users = await get_users();
    return users.find((user) => user.id === parseInt(id));
};
