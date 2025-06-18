const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if(!res.ok) throw new Error('Failed to fetch');
    return res.json()
}


export async function post<T>(endpoint: string, data: T): Promise<T> {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    if(!res.ok) throw new Error('Failed to post');
    return res.json();
}


export async function put<T>(endpoint: string, data: T): Promise<T> {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    if(!res.ok) throw new Error('Failed to update');
    return res.json();
}


export async function del(endpoint: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'DELETE'
    })

    if(!res.ok) throw new Error('Failed to delete')
}

