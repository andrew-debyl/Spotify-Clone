"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<Props> = ({ children }) => {
  const [supaBaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider
      supabaseClient={supaBaseClient}
    >
        {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;