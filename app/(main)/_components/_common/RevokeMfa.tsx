import { Button } from "@/components/ui/button";
import { revokeMfaMutationFn } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";

const RevokeMfa = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: revokeMfaMutationFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({
        queryKey: ["authUser"],
      });
      toast.success("MFA revoked successfully", {
        description: response.message,
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error("MFA revoked failed", {
        description: error.message,
      });
    },
  });

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const handleClick = useCallback(() => {
    mutate();
  }, []);

  return (
    <Button
      disabled={isPending}
      className="h-[35px] !text-[#c40006d3] !bg-red-100 shadow-none mr-1"
      onClick={handleClick}
    >
      {isPending && <Loader className="animate-spin" />}
      Revoke Access
    </Button>
  );
};

export default RevokeMfa;
