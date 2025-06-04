import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
    fn: (params: P) => Promise<T>;
    params?: P;
    skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: (newParams?: P) => Promise<void>;
}

//Custom React Hook for managing Appwrite API calls with state handling
export function useAppwrite<T, P extends Record<string, string | number>>({
    fn,
    params = {} as P,
    skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(!skip);
    // Set loading to true if skip is false
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(
        async (fetchParams: P) => {
            setLoading(true);
            setError(null);

            try {
                const result = await fn(fetchParams);
                setData(result);
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error ? err.message : "An error occurred";
                setError(errorMessage);
                Alert.alert("Error", errorMessage);
            } finally {
                setLoading(false);
            }
        }, [fn]);

    useEffect(() => {
        if (!skip) {
            fetchData(params);
        }
    }, []);

    // Refetch function to fetch data with new parameters
    const refetch = useCallback(async (newParams?: P) => {
        await fetchData(newParams || params);
    }, [fetchData, params]);



    return { data, loading, error, refetch };
}